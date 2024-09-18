//Promise.finally():


      fetch('url')
      .then(response => response.json())
      .finally(() => 'Operation completed');