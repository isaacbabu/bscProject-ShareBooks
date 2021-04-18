import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AlertModelComponent extends Component {
    @tracked isLarge = true;

    @action toggleSize() {
      this.isLarge = !this.isLarge;
    }
}
