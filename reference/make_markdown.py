import glob

def main():
    files = sorted(glob.glob('*.js'))

    contents = []
    for f in files:
        contents.append(open(f).read().strip())

    for fname,content in zip(files,contents):
        print "[%s](%s):" % (fname, fname)
        print "```javascript"
        print content
        print "```"
        print ""

if __name__ == '__main__':
    main()

