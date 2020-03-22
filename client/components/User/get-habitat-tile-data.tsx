import {entityId, SUBSCRIPTION_STATUSES} from "../../../server/db/types";
import {IPlant} from "../../../server/db/models/plant/plant.interface";
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
            text: `subscription ${props.subscription.status}`,
            elementKey: `tag-${props.id}-status`,
            backgroundColor: COLORS.darkGray,
            color: COLORS.white,
        },
    ];
};

export default (props: IProps): ITileProps => {
    const isSubscribed = props.subscription.status === SUBSCRIPTION_STATUSES.ACTIVE;
    return {
        elementKey: props.id,
        title: props.name,
        details: isSubscribed ? `${props.plants.length} plants` : undefined,
        imageUrl: props.imageUrl,
        linkTo: isSubscribed ? `/habitats/${props.id}` : undefined,
        tags: getTags(props, isSubscribed),
    };
};