import { describe, expect, it, test } from 'vitest'

import  Card from './../CardComponent'
import { mount } from '@vue/test-utils'

describe('Card', () => {
    const title: string = 'This is a title!';
    
    const wrapper = mount(Card, {
        props: {
            title: title
        }
    })

    it('Should render correctly', () => {
        expect(wrapper.html()).toMatchSnapshot()
    });

    it('Should render title', async () => {
        expect(wrapper.html().includes(title))
    });
})