# Architecture

### Creating a MPA

You can define an arbitrary number of `entrypoints` in your config, like in [minimal-config-dev-server](../minimal-config-dev-server/webpack.dev.config.js). Pay attention to the `css` and `js` filename configs.  
Would you like to create several `html` files for each component, you'd need to configure several times the `HTMLWebpackPlugin`, you can find an example for this in the `config` pointer above.