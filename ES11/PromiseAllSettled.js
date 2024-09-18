//Promise.allSettled:

    const promises = [Promise.resolve(1), Promise.reject('error')];
    Promise.allSettled(promises);