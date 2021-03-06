/**
 * React Store Init
 *
 * Ghostery Browser Extension
 * https://www.ghostery.com/
 *
 * Copyright 2018 Ghostery, Inc. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0
 */

/**
 * @namespace SetupReactStore
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combinedReducers from '../reducers';

/**
 * Build store using combined reducers and middleware
 * @param  {Object} initialState
 * @return {Object}
 * @memberof SetupReactStore
 */
export default function configureStore(initialState) {
	return createStore(combinedReducers, initialState, applyMiddleware(thunk));
}
