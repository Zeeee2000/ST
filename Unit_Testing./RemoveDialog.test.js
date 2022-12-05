import { ExpansionPanelActions } from "@material-ui/core";
import RemoveDialog from "./RemoveDialog";
import {shallow} from Enzyme

//describe('Remove Cart Items Testing!',()=>{
//    it('Class check',()=>{
//        let wrapper=shallow(<RemoveDialog/>)
//    })
//})
describe('Remove Cart Items Testing!2',()=>{
    it('Class check',()=>{
        let wrapper=shallow(<DialogContent/>)
        console.log(wrapper.debug)
        expect(wrapper.exists('Are you sure that you want to remove selected item?')).toEqual(true)
    })
})
