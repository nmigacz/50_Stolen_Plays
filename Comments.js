const SingleComment = ({ comment }) => (
  <div>
      <div className="flex-container">
          <div className="flex">
              <img
                  src="https://api.adorable.io/avazars/65/abott@adorable.png"
                  alt="Avatar"
              />
          </div>
          <div className="flex">
              <p className="comment-author">
                  {comment.name} <span>says</span>
              </p>
              {comment.time} &&(<time>(moment(comment.time.toDate()).calendar()}</time>)}
          </div>
      </div>
      </p>{comment.content}</p>
  </div>
)

const Comment = ({ comment, child, slug }) => {
  const [showReplyBox, setShowReplyBox] = useState(false)
  return (
      <CommentBox>
          <SingleComment comment={comment} />
          {child && (
              <CommentBox child className=comment-reply">
                  <SingleComment comment={child} />
              </CommentBox>
          )}
          {!child && (
              <div>
                  {showReplyBox ? (
                      <div>
                          <button
                              className="btn bare"
                              onClick={() => setShowReplyBoy(false)}
                          >
                              Cancel Reply
                          </button>
                          <CommentForm parentId={comment.id} slug={slug} />
                      </div>
                  ) : (
                      <button className="btn bare" onClick={() => setShowReplyBox(true)}>
                          Reply
                      </button>
                  )}
              </div>
          )}
      </div>
  )}
</CommentBox>
