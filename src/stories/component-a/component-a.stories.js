import {storiesOf} from '@storybook/vue';
import WebcomponentA from '../../components/WebcomponentA.vue';

storiesOf('WebcomponentA', module)
    .add('with text', () => ({
        components: {WebcomponentA},
        template: '<webcomponent-a msg="with text"></webcomponent-a>'
    }))
    .add('with emoji', () => ({
        components: {WebcomponentA},
        template: '<webcomponent-a msg="😀 😎 👍 💯"></webcomponent-a>'
    }))
    .add('as a component', () => ({
        components: {WebcomponentA},
        template: '<webcomponent-a msg="As a component"></webcomponent-a>'
    }));
