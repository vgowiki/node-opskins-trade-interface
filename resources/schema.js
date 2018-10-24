/* ---------- ITrade methods ---------- */
const ITrade = {
  AcceptOffer: {
    method: 'POST',
    params: {
      twofactor_code: {
        required: true,
        regex: /^[0-9]{6}$/
      },
      offer_id: {
        required: true,
        regex: /^[0-9]+$/
      }
    }
  },

  CancelOffer: {
    method: 'POST',
    params: {
      offer_id: {
        required: true,
        regex: /^[0-9]+$/
      }
    }
  },

  GetApps: {
    method: 'GET',
    params: {}
  },

  GetOffer: {
    method: 'GET',
    params: {
      offer_id: {
        required: true,
        regex: /^[0-9]+$/
      }
    }
  },

  GetOffers: {
    method: 'GET',
    params: {
      uid: {
        required: false,
        regex: /^[0-9]+$/
      },
      state: {
        required: false,
        regex: /^([2,3,5,6,7,8](,[2,3,5,6,7,8]){0,})$/
      },
      type: {
        required: false,
        regex: /^(received|sent)$/
      },
      page: {
        required: false,
        regex: /^[0-9]+$/
      },
      per_page: {
        required: false,
        regex: /^([1-9][0-9]|[0-9]|100)$/
      },
      ids: {
        required: false,
        regex: /^([0-9]+(,[0-9]{1,}){0,})$/
      }
    },
    recursive_array: 'offers'
  },

  GetTradeURL: {
    method: 'GET',
    params: {}
  },

  GetUserInventory: {
    method: 'GET',
    params: {
      uid: {
        required: true,
        regex: /^[0-9]+$/
      },
      app_id: {
        required: true,
        regex: /^[0-9]+$/
      },
      page: {
        required: false,
        regex: /^[0-9]+$/
      },
      per_page: {
        required: false,
        regex: /^([1-9][0-9]|[0-9]|100)$/
      },
      search: {
        required: false,
        regex: /(.*?)/
      }
    },
    recursive_array: 'items'
  },

  GetUserInventoryFromSteamId: {
    method: 'GET',
    params: {
      steam_id: {
        required: true,
        regex: /^[0-9]{17}$/
      },
      app_id: {
        required: true,
        regex: /^[0-9]+$/
      },
      page: {
        required: false,
        regex: /^[0-9]+$/
      },
      per_page: {
        required: false,
        regex: /^([1-9][0-9]|[0-9]|100)$/
      },
      search: {
        required: false,
        regex: /(.*?)/
      }
    },
    recursive_array: 'items'
  },

  RegenerateTradeURL: {
    method: 'POST',
    params: {}
  },

  SendOffer: {
    method: 'POST',
    params: {
      twofactor_code: {
        required: true,
        regex: /^[0-9]{6}$/
      },
      uid: {
        required: true,
        regex: /^[0-9]+$/
      },
      token: {
        required: true,
        regex: /^[a-zA-Z0-9]{8}$/
      },
      items_to_send: {
        required: false,
        regex: /^([0-9]+(,[0-9]{1,}){0,199})$/
      },
      items_to_receive: {
        required: false,
        regex: /^([0-9]+(,[0-9]{1,}){0,199})$/
      },
      message: {
        required: false,
        regex: /(.*?)/
      },
      expiration_time: {
        required: false,
        regex: /^[0-9]{3,7}$/
      }
    }
  },

  SendOfferToSteamId: {
    method: 'POST',
    params: {
      twofactor_code: {
        required: true,
        regex: /^[0-9]{6}$/
      },
      steam_id: {
        required: true,
        regex: /^[0-9]{17}$/
      },
      items_to_send: {
        required: false,
        regex: /^([0-9]+(,[0-9]{1,}){0,199})$/
      },
      items_to_receive: {
        required: false,
        regex: /^([0-9]+(,[0-9]{1,}){0,199})$/
      },
      search: {
        required: false,
        regex: /(.*?)/
      },
      message: {
        required: false,
        regex: /(.*?)/
      },
      expiration_time: {
        required: false,
        regex: /^[0-9]{3,7}$/
      }
    }
  }
}

/* ---------- IUser methods ---------- */
const IUser = {
  CreateVCaseUser: {
    method: 'POST',
    params: {
      site_url: {
        required: true,
        regex: /^https?\:\/\/\w{1,}(\.\w{1,}){1,}$/
      },
      display_name: {
        required: true,
        regex: /(.*?)/
      }
    }
  },

  GetInventory: {
    method: 'GET',
    params: {
      app_id: {
        required: true,
        regex: /^[0-9]+$/
      },
      page: {
        required: false,
        regex: /^[0-9]+$/
      },
      per_page: {
        required: false,
        regex: /^([1-9][0-9]|[0-9]|100)$/
      },
      search: {
        required: false,
        regex: /(.*?)/
      },
      sort: {
        required: false,
        regex: /^[1-6]$/
      },
      filter_in_trade: {
        required: false,
        regex: /^(true|false)$/
      }
    },
    recursive_array: 'items'
  },

  GetProfile: {
    method: 'GET',
    params: {
      with_extra: {
        required: false,
        regex: /^(true|false)$/
      }
    }
  },

  UpdateProfile: {
    method: 'POST',
    params: {
      display_name: {
        required: false,
        regex: /(.*?)/
      },
      inventory_is_private: {
        required: false,
        regex: /^(true|false)$/
      },
      allow_twofactor_code_reuse: {
        required: false,
        regex: /^(true|false)$/
      }
    }
  }
}

/* ---------- ITest methods ---------- */
const ITest = {
  Test: {
    method: 'GET',
    params: {}
  },

  TestAuthed: {
    method: 'GET',
    params: {}
  },

  TestBody: {
    method: 'POST',
    params: {}
  }
}

/* ---------- IItem methods ---------- */
const IItem = {
  GetItemsById: {
    method: 'GET',
    params: {
      item_id: {
        required: true,
        regex: /^([0-9]+(,[0-9]{1,}){0,})$/
      }
    }
  },

  WithdrawToOpskins: {
    method: 'POST',
    params: {
      item_id: {
        required: true,
        regex: /^([0-9]+(,[0-9]{1,}){0,})$/
      }
    }
  },

  GetItems: {
    method: 'GET',
    params: {
      sku_filter: {
        required: false,
        regex: /^([0-9]+(,[0-9]{1,}){0,})$/
      },
      wear_tier_index: {
        required: false,
        regex: /^[0-9]+$/
      }
    }
  }
}

/* ---------- IEthereum methods ---------- */
const IEthereum = {
  GetContractAddress: {
    method: 'GET',
    params: {}
  }
}

/* ---------- ICaseSite methods ---------- */
const ICaseSite = {
  GetKeyCount: {
    method: 'GET',
    params: {
      steam_id: {
        required: false,
        regex: /^[0-9]{17}$/
      },
      token_url: {
        required: false,
        regex: /^https:\/\/trade\.opskins\.com\/t\/[0-9]+\/[a-zA-Z0-9]{8}$/
      }
    }
  },

  GetTradeStatus: {
    method: 'GET',
    params: {
      offer_id: {
        required: true,
        regex: /^[0-9]+$/
      }
    }
  },

  SendKeyRequest: {
    method: 'POST',
    params: {
      steam_id: {
        required: false,
        regex: /^[0-9]{17}$/
      },
      token_url: {
        required: false,
        regex: /^https:\/\/trade\.opskins\.com\/t\/[0-9]+\/[a-zA-Z0-9]{8}$/
      },
      case_id: {
        required: true,
        regex: /^[0-9]+$/
      },
      affiliate_eth_address: {
        required: true,
        regex: /^[0-9]+$/
      },
      amount: {
        required: false,
        regex: /^[0-9]+$/
      }
    }
  }
}

/* ---------- ICase methods ---------- */
const ICase = {
  GetCaseSchema: {
    method: 'GET',
    params: {
      cases: {
        required: false,
        regex: /^([0-9]+(,[0-9]{1,}){0,})$/
      }
    }
  },

  GetMinimumOpenVolume: {
    method: 'GET',
    params: {}
  },

  OpenWithKeys: {
    method: 'POST',
    params: {
      case_id: {
        required: true,
        regex: /^[0-9]+$/
      },
      amount: {
        required: false,
        regex: /^[0-9]+$/
      }
    }
  }
}

module.exports = { ITrade, IUser, ITest, IItem, IEthereum, ICaseSite, ICase }
