import Vue from 'vue';
import store from '../../core/services/store';

Vue.filter('numberFormat', (value, decimals = 3) => new Intl.NumberFormat(
    store.state.preferences.global.lang, {
        style: 'decimal',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    },
).format(value));
