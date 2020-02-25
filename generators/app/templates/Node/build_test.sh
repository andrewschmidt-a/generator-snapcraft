snapcraft
multipass launch -n testvm
multipass copy-files {{name}}*.snap testvm:
multipass shell testvm
sudo snap install --devmode --dangerous {{name}}*.snap
snap list
{{name}} -h