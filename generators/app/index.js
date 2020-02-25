'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path')
const fs = require('fs')
const Mustache = require("mustache")
const { execSync } = require('child_process');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the praiseworthy ${chalk.red('generator-snapcraft-yo-node')} generator!`)
    );
    this.snapname = "new-snap"
    this.lang = "Node"
    this.summary = "My new snap"
    this.description = "This is a generated snap project"

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your snap name',
        default: this.snapname
      },
      {
        type: 'list',
        name: 'language',
        message: 'Language',
        default: this.lang,
        choices:[
          "Node",
          "Python"
        ]
      },
      {
        type: 'input',
        name: 'summary',
        message: 'Summary of your snap',
        default: this.summary
      },
      {
        type: 'input',
        name: 'description',
        message: 'Your snap description',
        default: this.description
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author',
        default: this.author
      },
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    console.log(this.props)
    this.fs.copy(
      this.templatePath(this.props.language),
      this.contextRoot
    );

    // package.json
    var filename = path.resolve(this.contextRoot, "package.json")
    var content = Mustache.render(fs.readFileSync(path.resolve(this.templatePath(this.props.language), "package.json")).toString(), this.props)

    this.fs.write(filename, content)

    // snapcraft.yaml
    var filename = path.resolve(this.contextRoot, "snapcraft.yaml")
    var content = Mustache.render(fs.readFileSync(path.resolve(this.templatePath(this.props.language), "snapcraft.yaml")).toString(), this.props)
    
    this.fs.write(filename, content)

    // build_test.sh
    var filename = path.resolve(this.contextRoot, "build_test.sh")
    var content = Mustache.render(fs.readFileSync(path.resolve(this.templatePath(this.props.language), "build_test.sh")).toString(), this.props)
    
    this.fs.write(filename, content)
  }

  install() {
    this.npmInstall();
    execSync("git init")
    execSync("git add -A")
    execSync("git commit -am \"intital\"")
    execSync("ls -la")
    execSync("chmod +x ./build_test.sh")
  }
};
