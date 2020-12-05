#!/bin/bash

source scripts/utils/init.sh;

scripts/core/build-core.sh

for package in "${packages[@]}"
do
    scripts/runners/build-strategy.sh $package
done
