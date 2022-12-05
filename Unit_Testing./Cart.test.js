import { Paper } from "@material-ui/core";
import Hbox from "./CartItem";
import {shallow} from Enzyme

describe('HBOX class testing Testing!2',()=>{
    it('Class check',()=>{
        let wrapper=shallow(<Hbox/>)
        console.log(wrapper.debug)
        expect(wrapper.exists(classes.thumb)).toEqual(true)
    })
})
