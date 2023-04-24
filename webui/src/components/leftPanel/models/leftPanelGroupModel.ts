import {Record, List} from 'immutable';

import {LeftPanelGroupItemModel} from './leftPanelGroupItemModel';
import LeftPanelSubgroupModel from './leftPanelSubGroupModel';

const LeftPanelGroupRecord = Record({
    id: '',
    name: '',
    subgroups: List<LeftPanelSubgroupModel>(),
    items: List<LeftPanelGroupItemModel>()
});

export default class LeftPanelGroupModel extends LeftPanelGroupRecord {
}