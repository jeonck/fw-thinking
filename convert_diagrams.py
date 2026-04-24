import os
import re

def convert_to_flowchart(match):
    full_block = match.group(0)
    # Extract just the lines starting from mindmap
    # Some blocks might have mindmap on the same line as ```mermaid, so handle that
    mindmap_content = re.search(r'mindmap\s+(.*)', full_block, re.DOTALL)
    if not mindmap_content:
        return full_block
        
    lines = mindmap_content.group(1).strip().split('\n')
    if not lines:
        return full_block
    
    # Root is the first line
    root_line = lines[0].strip()
    root_label = root_line.replace('((', '').replace('))', '').replace('"', '').replace('root', '').strip()
    root_id = re.sub(r'[^a-zA-Z0-9]', '', root_label) or "Root"
    
    flowchart = ['```mermaid', 'flowchart TD']
    
    stack = [(0, root_id)]
    
    for line in lines[1:]:
        stripped = line.lstrip()
        if not stripped: continue
        indent = len(line) - len(stripped)
        label = stripped.replace('((', '').replace('))', '').replace('"', '').strip()
        
        while stack and stack[-1][0] >= indent:
            stack.pop()
        
        if not stack:
            # Fallback if indent is messed up
            parent = root_id
        else:
            parent = stack[-1][1]
            
        node_id = re.sub(r'[^a-zA-Z0-9]', '', label) or "Node" + str(indent)
        flowchart.append(f'  {parent} --> {node_id}[{label}]')
        stack.append((indent, node_id))
        
    flowchart.append('```')
    return '\n'.join(flowchart)

for root, dirs, files in os.walk('docs'):
    for file in files:
        if file.endswith('.md'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if 'mindmap' in content:
                # Update regex to be more permissive
                content = content.replace('"```mermaid"', '```mermaid')
                # Match ```mermaid\n... mindmap ... ```
                pattern = re.compile(r'```mermaid.*?mindmap.*?\s*```', re.DOTALL)
                
                new_content = pattern.sub(convert_to_flowchart, content)
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f'Updated {path}')
