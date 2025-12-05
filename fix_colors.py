import os
import re

# Directory to search
app_dir = r'c:\Users\tamir\Downloads\iaparatudo\app'

# Patterns to replace
replacements = [
    (r'text-blue-600', 'text-black'),
    (r'text-blue-500', 'text-gray-900'),
    (r'text-blue-400', 'text-gray-700'),
]

# Walk through all .tsx files
for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Apply all replacements
                modified = content
                for old, new in replacements:
                    modified = modified.replace(old, new)
                
                # Only write if changes were made
                if modified != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(modified)
                    print(f'Updated: {filepath}')
            except Exception as e:
                print(f'Error processing {filepath}: {e}')

print('Done!')
