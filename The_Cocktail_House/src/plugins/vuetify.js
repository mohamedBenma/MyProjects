import '@fortawesome/fontawesome-free'
import 'material-design-icons-iconfont'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons:{
        iconfont:'md' || 'fa',
    },
    theme:{
        dark:{
            background:'#000000',
        }
    }
});
