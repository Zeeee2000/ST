it('Childern length check',()=>
{
    let wrapper=shallow(<Hbox/>);
    expect(wrapper.find('ul').children().length).toBe(4)
})

it('Child check',()=>
{
    let wrapper=shallow(<Hbox/>);
    expect(wrapper.find('ul').childAt(0).type()).toBe('span')
})
