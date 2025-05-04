# Set project name
$ProjectName = "windia-movers-clone"

# Create Angular project
ng new $ProjectName --routing --style=scss --skip-git
cd $ProjectName

# Add Angular Material (use booleans directly)
ng add @angular/material --theme indigo-pink --typography true --animations true

# Create component folders manually
$components = @("header", "hero", "services", "testimonials", "footer")
foreach ($component in $components) {
    New-Item -ItemType Directory -Path "src/app/components/$component" -Force
}

# Generate Angular components
foreach ($component in $components) {
    ng generate component components/$component
}

# Overwrite app.component.html layout
@"
<app-header></app-header>
<app-hero></app-hero>
<app-services></app-services>
<app-testimonials></app-testimonials>
<app-footer></app-footer>
"@ | Set-Content -Path "src/app/app.component.html"

# Overwrite global styles
@"
@import '~@angular/material/prebuilt-themes/indigo-pink.css';

body {
  margin: 0;
  font-family: Roboto, sans-serif;
  background-color: #f5f5f5;
}
"@ | Set-Content -Path "src/styles.scss"

Write-Host "✅ Angular Evom Movers clone is set up successfully!"
