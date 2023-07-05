export function getCommentMessage(oldBranchName) {
    // TODO: add a list of allowed branches in herewhen that part is implemnted
    return `
## ⚠️⚠️ Your branch name \`${oldBranchName}\` does not conform with the branch naming strategies defined in your repository

These are the branch naming schemes defined in this repository:
${"```"}
<BRANCH REGEXES>
${"```"}

but do not worry, you just have to rename the branch you have created to pass this check

## Renaming your branch locally and on remote

pick any of the prefix that applies to your changes, and replace \`<new_name>\` with that.

example: \`feature/${oldBranchName}\`

${"```"}
# Rename the local branch to the new name
git branch -m ${oldBranchName} <new_name>

# Delete the old branch on remote - where <remote> is, for example, origin
git push origin --delete ${oldBranchName}

# Prevent git from using the old name when pushing in the next step.
# Otherwise, git will use the old upstream name instead of <new_name>.
git branch --unset-upstream <new_name>

# Push the new branch to remote
git push origin <new_name>

# Reset the upstream branch for the new_name local branch
git push origin -u <new_name>
${"```"}

for detailed explanation, refer: https://stackoverflow.com/a/30590238`;
}
