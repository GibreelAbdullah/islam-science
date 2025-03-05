import requests
import json
import os
from urllib.parse import quote

def get_directory_structure(repo_owner, repo_name, path="", token=None):
    """
    Recursively fetch the directory structure of a GitHub repository.
    
    Parameters:
    repo_owner (str): The GitHub username of the repository owner
    repo_name (str): The name of the repository
    path (str): The current path within the repository (for recursive calls)
    token (str): GitHub personal access token (optional, for private repos)
    
    Returns:
    dict: A nested dictionary representing the directory structure
    """
    headers = {"Accept": "application/vnd.github.v3+json"}
    if token:
        headers["Authorization"] = f"token {token}"
    
    # URL encode the path for the API request
    encoded_path = quote(path) if path else ""
    
    url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/contents/{encoded_path}"
    print(url)
    response = requests.get(url, headers=headers)
    
    if response.status_code != 200:
        print(f"Error fetching {path}: {response.status_code}")
        print(response.json())
        return {}
    
    contents = response.json()
    structure = {}
    
    for item in contents:
        if item["type"] == "dir":
            # Recursively fetch directory contents
            sub_path = os.path.join(path, item["name"]) if path else item["name"]
            structure[item["name"]] = get_directory_structure(repo_owner, repo_name, sub_path, token)
        else:
            # For files, just store the name and size
            structure[item["name"]] = {
                "type": "file",
                "size": item["size"],
                "download_url": item["download_url"]
            }
    
    return structure

def print_directory_structure(structure, output_file, path=""):
    """
    Write the directory structure to a text file.
    
    Parameters:
    structure (dict): The directory structure as returned by get_directory_structure
    output_file (file): An open file handle to write to
    indent (int): The current indentation level (for recursive calls)
    path (str): The current path (for recursive calls)
    """
    for name, content in sorted(structure.items()):
        current_path = os.path.join(path, name) if path else name
        
        if isinstance(content, dict) and "type" in content and content["type"] == "file":
            # This is a file
            if current_path.endswith(".json"):
                current_path = current_path.replace("islam-science", "").replace(".json", "")
                output_file.write(current_path + "\n")
        else:
            # This is a directory
            # output_file.write(" " * indent + "📁 " + current_path + "\n")
            print_directory_structure(content, output_file, current_path)

# Example usage
if __name__ == "__main__":
    repo_owner = "GibreelAbdullah"
    repo_name = "islam-science-api"
    output_filename = f"endpoints.txt"
    
    # For private repositories, uncomment the following line and add your token
    # token = "your_github_personal_access_token"
    # structure = get_directory_structure(repo_owner, repo_name, token=token)
    
    # For public repositories
    structure = get_directory_structure(repo_owner, repo_name)
    
    # Write the structure to a text file
    with open(output_filename, "w", encoding="utf-8") as f:
        print_directory_structure(structure, f)
    
    print(f"Directory structure has been saved to {output_filename}")
    
    # # Optionally save the structure to a JSON file
    # with open(f"{repo_name}_structure.json", "w") as f:
    #     json.dump(structure, f, indent=2)
    # print(f"Full structure saved to {repo_name}_structure.json")