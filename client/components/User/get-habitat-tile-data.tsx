import {entityId, SUBSCRIPTION_STATUSES} from "../../../common/db-interfaces/types";
import {IPlant} from "../../../common/db-interfaces/plant.interface";
import {ITileProps} from "../TileDisplay/tile";
import {ITagProps} from "../TileDisplay/tag";
import {COLORS} from "../style-config";

interface IProps {
    id: entityId; // habitat id
    name: string;
    imageUrl: string;
    plants: IPlant[];
    subscription: { status: SUBSCRIPTION_STATUSES };
}

const getTags = (props: IProps, isSubscribed: boolean): ITagProps[] => {
    return isSubscribed ? [] : [
        {
            text: `subscription ${(props.subscription || {}).status}`,
            elementKey: `tag-${props.id}-status`,
            backgroundColor: COLORS.darkGray,
            color: COLORS.white,
        },
    ];
};

export default (props: IProps): ITileProps => {
    // we expect the subscription property to always exist in the data that we actually care about.  However,
    // there is problem where the single Habitat page is using the same habitats property in the redux state
    // as UserHabitats page, which is the page that calls this method. That single Habitat page fills the habitats
    // property with a single habitat that does NOT have the subscription property and, before the UserHabitats
    // page is able to overwrite the habitats property to an array of habitats where each does have a subscription
    // property, the page is rendered and this method is called.
    // @ts-ignore
    const isSubscribed = (props.subscription || {}).status === SUBSCRIPTION_STATUSES.ACTIVE;
    return {
        elementKey: props.id,
        title: props.name,
        details: isSubscribed ? `${props.plants.length} plants` : undefined,
        imageUrl: props.imageUrl,
        linkTo: isSubscribed ? `/habitats/${props.id}` : undefined,
        tags: getTags(props, isSubscribed),
    };
};