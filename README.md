# Deploy to GitHub pages
Another simple way to deploy your Angular app is to use GitHub Pages.
You need to create a GitHub account if you don't have one, and then create a repository for your project. Make a note of the user name and project name in GitHub.
Build your project using Github project name, with the Angular CLI command ng build and the options shown here:
content_copy
```
ng build --prod --output-path docs --base-href /<project_name>/
```
When the build is complete, make a copy of docs/index.html and name it docs/404.html.
Commit your changes and push.
On the GitHub project page, configure it to [publish from the docs folder](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages#publishing-your-github-pages-site-from-a-docs-folder-on-your-master-branch).
You can see your deployed page at https://<user_name>.github.io/<project_name>/.
