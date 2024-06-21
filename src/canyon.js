function reportCoverageFunction() {
  return fetch(`https://app.canyoncov.com/coverage/client`,{
    method:'POST',
    headers: {
      Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IndyX3poYW5nMjUiLCJpZCI6MTAxMjA1ODAsImlhdCI6MTcxODQzMjc1OSwiZXhwIjoyMDM0MDA4NzU5fQ.2C7hUfC_uVykgvr4y4cw3SW9BO5K187921IVdrFGY9c`,
      'Content-Type': 'application/json' // 指定请求头中的内容类型为 JSON
    },
    body:JSON.stringify({
      coverage:window.__coverage__,
      commitSha:'58f249e185ad3c8f632ba49e8bc5bcd770b38a58',
      instrumentCwd:'/app',
      projectID:'59119044'
    })
  })
}
export const initCanyon = () => {
  document.addEventListener('visibilitychange', reportCoverageFunction)
  window.reportCoverage = reportCoverageFunction;
}
