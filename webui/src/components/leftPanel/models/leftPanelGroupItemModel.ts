import {Record, List} from 'immutable';


const BaseLeftPanelGroupItemModel = Record({
    id: '',
    isSelected: false,
    name: '',
    price: 0
})

export default BaseLeftPanelGroupItemModel;

export class LeftPanelGroupItemModel extends BaseLeftPanelGroupItemModel{
}
