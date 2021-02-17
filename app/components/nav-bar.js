import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NavBarComponent extends Component {
    @tracked isLarge = false;

    @action toggleSize() {
      this.isLarge = !this.isLarge;
    }
}
