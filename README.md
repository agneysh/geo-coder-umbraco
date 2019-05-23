# Geo-Coder-Umbraco
Geo coding plugin for Umbraco. Feel free to fork and contribute.

# Contributors

[agneysh](https://github.com/agneysh)


# Installation

Download / Clone the project and put it inside a folder under

App_Plugins

geoCoder ( create the folder )

(then you have the files here)

# Technical Details

The GeoCoder will use the address given on the text field and generate coordinates from it.

**Note:**
**Add your google api key on the line 7: "assetsService.loadJs("https://maps.googleapis.com/maps/api/js?key="); "**



Tested up to: Umbraco 7.2


# Commit Messages
Must be one of the following

* build: Changes that affect the build system or external dependencies (example scopes: webpack, npm)
* config: configuration changes only
* docs: Documentation only changes
* feat: A new feature
* fix: A bug fix
* perf: A code change that improves performance
* refactor: A code change that neither fixes a bug nor adds a feature
* style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)