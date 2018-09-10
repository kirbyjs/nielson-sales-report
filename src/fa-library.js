// Created by kirbyjs on 9/8/18.

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default function initializeFALibrary() {
    library.add(faPlus);
    library.add(faTimesCircle);
}
