import {storiesOf} from '@storybook/vue';
import WebcomponentB from '../../components/WebcomponentB.vue';

storiesOf('WebcomponentB', module)
    .add('with text', () => ({
        components: {WebcomponentB},
        template: '<webcomponent-b msg="with text"></webcomponent-b>'
    }));