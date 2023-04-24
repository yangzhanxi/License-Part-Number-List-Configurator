import {List, Record} from 'immutable';

import {LeftPanelGroupItemModel} from './leftPanelGroupItemModel';

const LeftPanelSubgroupRecord = Record({
    id: '',
    name: '',
    items: List<LeftPanelGroupItemModel>()
});

export default class LeftPanelSubgroupModel extends LeftPanelSubgroupRecord {
}
