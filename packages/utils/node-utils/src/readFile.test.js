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
import path from 'path';
import readFile from './readFile.js';

const baseDir = path.resolve(process.cwd(), 'test/readFile');

test('readFile', async () => {
  const filePath = path.resolve(baseDir, 'readFile.txt');
  const res = await readFile(filePath);
  expect(res).toEqual('Test Read File');
});

test('readFile file not found throws', async () => {
  const filePath = path.resolve(baseDir, 'doesNotExist.txt');
  const res = await readFile(filePath);
  expect(res).toEqual(null);
});

test('readFile error id filepath is not a string', async () => {
  await expect(readFile({})).rejects.toThrow(
    'Could not read file, file path should be a string, received {}.'
  );
});
