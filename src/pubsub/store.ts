type TopicToken<Store> = keyof {
    [Key in keyof Store as Store[Key] extends symbol | string | number
    // @ts-expect-error
    ? `${Key}`
    // @ts-expect-error
    : `${Key}.${TopicToken<Store[Key]>}`]: true;
}

type IStore<Topics> = {
    (Topic: TopicToken<Topics>): Function;
}

interface Store<Topics> extends IStore<Topics>{
}

export default Store;