# wearables-scanner

A simple scene that shows how to fetch player wearable data to match against a criteria. In this case, only players wearing eyewear are allowed in.

![](screenshot/scanner.gif)

This scene shows you:

- How to fetch the wearables currently worn by a player
- How to handle async functions
- How to delay an action with the utils library
- How to define the elements of a scene as game objects, with state and functions

Here we're querying the player's wearable items that are being equipped, and also fetching the full list of Decentraland wearables. We then match both these lists up to obtain more information about each of the wearables that the player has equipped, and check if any of these belongs to the 'eyewear' category.

Feel free to reuse the models and code from this scene!

## Try it out

**Install the CLI**

Download and install the Decentraland CLI by running the following command:

```bash
npm i -g decentraland
```

**Previewing the scene**

Download this example and navigate to its directory, then run:

```
$:  dcl start
```

Any dependencies are installed and then the CLI opens the scene in a new browser tab.

```
&ENABLE_WEB3
```

For example, if the URL is `http://127.0.0.1:8000?position=0%2C0&SCENE_DEBUG_PANEL`, make it `http://127.0.0.1:8000?position=0%2C0&SCENE_DEBUG_PANEL&ENABLE_WEB3`

Learn more about how to build your own scenes in our [documentation](https://docs.decentraland.org/) site.

If something doesn’t work, please [file an issue](https://github.com/decentraland-scenes/Awesome-Repository/issues/new).

## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.
