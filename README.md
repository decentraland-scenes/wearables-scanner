# wearables-scanner

A simple scene that shows how to fetch player wearable data to match against a criteria. In this case, only players wearing eyewear are allowed in.

The crypto Utils function makes it a lot simpler to perform blockchain functions. Here we're querying the player's wearable items that are being equipped, and also fetching the full list of Decentraland wearables. We then match both these lists up to obtain more information about each of the wearables that the player has equipped, and check if any of these belongs to the 'eyewear' category.

You could similarly do different queries, like check for a specific wearable item by name, or check for any item of 'mythic' rarity.

![](screenshot/screenshot.png)

Feel free to reuse the models and code from this scene!

**Install the CLI**

Download and install the Decentraland CLI by running the following command

```bash
npm i -g decentraland
```

For a more details, follow the steps in the [Installation guide](https://docs.decentraland.org/documentation/installation-guide/).

**Previewing the scene**

Once you've installed the CLI, download this example and navigate to its directory from your terminal or command prompt.

_from the scene directory:_

```
$:  dcl start
```

Any dependencies are installed and then the CLI will open the scene in a new browser tab automatically.

Learn more about how to build your own scenes in our [documentation](https://docs.decentraland.org/) site.

## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.
