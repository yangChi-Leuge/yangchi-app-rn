export type newsType = {
    id : number,
    title : string,
    content : string,
    author : string,
    urlToImage : string,
    publishedAt : string
}

export type globalDateType =  {
    date: string,
    description: string,
    name: string
}

export type feedType = {
    post_Id: number,
    title: string,
    content: string,
    like: boolean,
    fk_member_id: string,
    hashtage: string,
    img: string,
}

export type userType = {
    id: string,
    name: string,
    postsCreatedByUser: {post_Id : string, title: string, content: string}[],
    likedPosts: {post_Id : string, title: string, content: string}[]
}
