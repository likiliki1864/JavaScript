//Promise.any

    const promises = [Promise.reject('error'), Promise.resolve(1)];
    Promise.any(promises);