# Plugins

Plugins are `JavaScript` libraries that can do everything that `loaders` can't do. Minifying and creating a different bundle structure can be some of the plugins responsabilities.  

### Minify
You can minify files with `terser` plugin.

### Clean dist folder on every generation
You can do so with the `CleanWebpackPlugin`. You can check in the config of [minimal-config-with-separate-css](minimal-config-with-separate-css/webpack.config.js)