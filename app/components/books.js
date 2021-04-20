import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class BooksComponent extends Component {
    @tracked query = '';
}