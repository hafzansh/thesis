# exceptions.py
class InfoException(Exception):
    ...


class NotFoundError(InfoException):
    def __init__(self):
        self.status_code = 404
        self.detail = "Item Not Found"


class AlreadyExistError(InfoException):
    def __init__(self):
        self.status_code = 409
        self.detail = "Item Already Exists"
