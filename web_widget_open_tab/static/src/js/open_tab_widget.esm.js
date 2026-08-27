import {registry} from "@web/core/registry";
import {router} from "@web/core/browser/router";
import {standardFieldProps} from "@web/views/fields/standard_field_props";
import {_t} from "@web/core/l10n/translation";
import {url} from "@web/core/utils/urls";
import {Component} from "@odoo/owl";

export class OpenTabWidget extends Component {
    static template = "web_widget_open_tab.openTab";
    static props = {
        ...standardFieldProps,
        title: {type: String, optional: true},
    };

    openNewTab(ev) {
        ev.stopPropagation();
    }
    _getReference() {
        const resModel = this.props.record.resModel;
        const resId = this.props.record.data[this.props.name];
        return url(router.stateToUrl({model: resModel, resId}));
    }
}

export const openTabWidget = {
    component: OpenTabWidget,
    displayName: _t("Open Tab"),
    supportedTypes: ["integer"],
    extractProps: () => ({
        title: _t("Click to open on new tab"),
    }),
};

registry.category("fields").add("open_tab", openTabWidget);
