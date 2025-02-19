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

function logError({ context, error }) {
  try {
    const { user = {} } = context;

    context.logger.error({
      err: error,
      user: {
        id: user.id,
        roles: user.roles,
        sub: user.sub,
        session_id: user.session_id,
      },
      url: context.req.url,
      method: context.req.method,
      resolvedUrl: context.nextContext?.resolvedUrl,
    });
  } catch (e) {
    console.error(error);
    console.error('An error occurred while logging the error.');
    console.error(e);
  }
}

export default logError;
