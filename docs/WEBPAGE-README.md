# Webpage

## Infrastructure Setup

This web page's infrastructure is defined in Terraform. That code is defined in [another repo here](https://github.com/MicahWW/Terraform/tree/main/projects/myself).


### Code Pipeline

The pipeline for deploying this code is all handled via [GitHub Actions](/.github/workflows/). A workflow dispatch of [a workflow](/.github/workflows/cd-release.yml) kicks off creating a new GitHub release, used mostly for tracking differences between deployment pushes, and a build and deploy flow. The [build flow](/.github/workflows/reuseable-build-nextjs.yml) is setup to ensure that all necessary assets needed for a standalone NextJs application are included and errors if anything is missing, once built it [starts to deploy](https://github.com/MicahWW/MicahWW/blob/main/.github/workflows/cd-release.yml#L32-L55) the compiled artifact and pushes it to the Azure App service

## Azure Icons

All icons for Azure, and all of it's services, used in this project are stored in [src/public/images/icons](/src/public/images/icons/) and are named _azure-\<name-of-icon\>.svg_. All of those icons were provided from a Microsoft documentation page [here](https://learn.microsoft.com/en-us/azure/architecture/icons/). The one Entra icon came from a different Microsoft documentation page [here](https://learn.microsoft.com/en-us/entra/architecture/architecture-icons)