#!/usr/bin/env bash
shopt -s failglob
set -eu -o pipefail

# Get Path to root directory assuming this script sits 1 folder above root
PARENT_PATH="$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )/.."
cd "$PARENT_PATH"

if [ "${BITBUCKET_BRANCH:-${GITHUB_REF##*/}}" == "prod" ]; then
  yarn serverless deploy --stage prod --region $AWS_REGION --param="profile=$AWS_PROFILE" 
else
  yarn serverless deploy --stage dev --region $AWS_REGION --param="profile=$AWS_PROFILE" 
fi

echo "Done!"