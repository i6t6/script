local function read_http(path, params)   
     ngx.req.read_body()
                local arg = ngx.req.get_post_args()
           for k,v in pairs(arg) do  

ngx.say("[GET ] key:",k, " v:", v)

ngx.say("<br>")

end
             