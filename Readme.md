docker run -h spfx -it --rm --name your-project -v $(pwd):/usr/app/spfx -p 5432:5432 -p 4321:4321 -p 35729:35729 waldekm/spfx


1. create a new user in ubuntu:
sudo adduser spfx
2. create a new group in ubuntu:
sudo addgroup spfxdev
3. add user to group
sudo usermod -a -G spfxdev spfx
4. add the current user to the group
sudo usermod -a -G spfxdev $USER
5. give the new group permission to the local folder 
sudo chown -R spfx:spfxdev office-fabric-react-portal/
6. start docker imager 
7. try to create a folder in docker image: mkdir test