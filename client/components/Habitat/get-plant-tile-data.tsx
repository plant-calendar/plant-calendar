import {IAugmentedPlant} from "../../store/habitat/selectors";
import {ITileProps} from "../TileDisplay/tile";
import {ITagProps} from "../TileDisplay/tag";
import {plantDataAccessors} from "../../../common/data-accessors/plant";
import {COLORS} from "../style-config";

interface IProps extends IAugmentedPlant {
    openSettings: () => any;
    justWatered: boolean;
    onReachEndOfWaveTransition: () => any;
}

export default (props: IProps): ITileProps => {
    const { plant, subscribed, daysOverdueForWater, onReachEndOfWaveTransition } = props;
    let tags: ITagProps[] = [];
    let details = '';
    let title = plant.name;
    let hasSettings = true;
    let isWaterablePlant = true;
    let imageUrl = plant.imageUrl;
    let containerStyle = {};

    if (props.justWatered) {
        title = 'Watered!';
        hasSettings = false;
        isWaterablePlant = false;
        imageUrl = '/check_circle.png';
        containerStyle = { border: `1px solid ${COLORS.fadedPrimaryGreen}` };
    } else {
        tags = [
            ...(daysOverdueForWater > 0
                    ? [
                        {
                            text: 'needs water',
                            backgroundColor: COLORS.notification,
                            color: COLORS.white,
                            elementKey: `${plant.id}-needs-water`,
                        }]
                    : []
            ),
            ...(subscribed
                    ? []
                    : [{
                        text: 'not subscribed',
                        backgroundColor: COLORS.darkGray,
                        color: COLORS.white,
                        elementKey: `${plant.id}-not-subscribed`,
                    }]
            ),
        ];
        const numOfDaysSinceWatered = plantDataAccessors.daysSinceWatered(plant);
        const lastWateredVerbage = numOfDaysSinceWatered === 0
            ? `today`
            : `${numOfDaysSinceWatered} days ago`;
        details = `Last watered ${lastWateredVerbage}`;
    }


    return {
        elementKey: plant.id,
        title,
        details,
        imageUrl,
        isWaterablePlant,
        hasSettings,
        openSettings: props.openSettings,
        tags,
        onReachEndOfWaveTransition,
        containerStyle,
    };
};