# Development


### Serving the app
You need the following dependencies: `webpack`, `webpack-dev-server`, `webpack-cli`. Then you can run `webpack serve` and it will be served for development purposes on `localhost`.  
Configure your `scripts` in `package.json` like:
```
{
  "scripts": {
  	...
    "start": "webpack serve"
    ...
  },
}
```

### Configuration options
There are some tweaks you can do to the config, a good example is [here](../minimal-config-dev-server/package.json)

### Hot Reloading
You can achieve it with the `--hot` flag.