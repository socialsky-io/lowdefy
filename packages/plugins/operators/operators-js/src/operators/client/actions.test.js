/*
  Copyright 2020-2023 Lowdefy, Inc

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import { jest } from '@jest/globals';

jest.unstable_mockModule('@lowdefy/operators', () => ({
  getFromObject: jest.fn(),
}));

test('actions calls getFromObject', async () => {
  const lowdefyOperators = await import('@lowdefy/operators');
  const actions = (await import('./actions.js')).default;
  actions({
    actions: {
      action_id: {
        response: 'returned from action',
      },
    },
    arrayIndices: [0],
    location: 'location',
    params: 'params',
  });
  expect(lowdefyOperators.getFromObject.mock.calls).toEqual([
    [
      {
        arrayIndices: [0],
        location: 'location',
        object: {
          action_id: {
            response: 'returned from action',
          },
        },
        operator: '_actions',
        params: 'params',
      },
    ],
  ]);
});
