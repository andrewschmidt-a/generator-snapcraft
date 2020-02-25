
# Make sure that the directory is a git repo
git init
git add -A
git commit -am "commit inital"

# build snap
snapcraft

# Run testvm and install snap
multipass launch -n testvm
multipass copy-files {{name}}*.snap testvm:
multipass exec testvm -- sudo snap install --devmode --dangerous {{name}}*.snap
multipass exec testvm -- snap list

# Open shell for test
echo "\n\n\nYour new snap is installed in testvm, type \"{{name}} -h\" to learn how to use it"
multipass shell testvm

# clean up containers and snap files
multipass delete snapcraft-{{name}}
multipass delete testvm
multipass purge
rm {{name}}*.snap